package com.example.sp_shopping_cart.services;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.example.sp_shopping_cart.dtos.mappers.ProductMapper;
import com.example.sp_shopping_cart.dtos.product.ProductRequestDTO;
import com.example.sp_shopping_cart.models.product.Product;
import com.example.sp_shopping_cart.repositories.ProductRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;
    private final ProductMapper productMapper;

    public Page<Product> getProducts(Pageable pageable) throws Exception {
        try {
            return productRepository.findAll(pageable);
        } catch (Exception e) {
            throw new Exception("Error fetching products: " + e.getMessage());
        }

    }

    public Product getProductById(Long productId) throws Exception {
        try {
            return findProductById(productId);
        } catch (Exception e) {
            throw new Exception("Error fetching product by id: " + e.getMessage());
        }
    }

    public Product createProduct(ProductRequestDTO createProductRequestDTO) throws Exception {
        try {
            checkIfProductAlreadyExists(createProductRequestDTO);
            return productRepository.save(productMapper.toProduct(createProductRequestDTO));

        } catch (Exception e) {
            throw new Exception("Error creating product: " + e.getMessage());
        }

    }

    public void deleteProductById(Long productId) throws Exception {
        try {
            Product p = findProductById(productId);
            productRepository.deleteById(p.getId());

        } catch (Exception e) {
            throw new Exception("Error deleting product by id: " + e.getMessage());
        }
    }

    public Product updateProduct(ProductRequestDTO updateProductRequestDTO) throws Exception {
        try {
            Product p = findProductById(updateProductRequestDTO.getId());
            productMapper.updateExistingProductFromDTO(updateProductRequestDTO, p);
            return productRepository.save(p);

        } catch (Exception e) {
            throw new Exception("Error updating product: " + e.getMessage());
        }
    }

    private Product findProductById(Long productId) throws Exception {
        Product p = productRepository.findById(productId).get();
        if (p == null) {
            throw new Exception("This product doesn't exist!");
        }

        return p;
    }

    private void checkIfProductAlreadyExists(ProductRequestDTO product) throws Exception {
        if (productRepository.existsByNameAndPublisher(product.getName(), product.getPublisher())) {
            throw new Exception("This product already exists!");
        }

    }

}
