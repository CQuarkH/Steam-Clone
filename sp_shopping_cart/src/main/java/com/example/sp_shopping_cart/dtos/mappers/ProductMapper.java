package com.example.sp_shopping_cart.dtos.mappers;

import java.time.LocalDate;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

import com.example.sp_shopping_cart.dtos.product.ProductRequestDTO;
import com.example.sp_shopping_cart.models.product.Product;

@Mapper(componentModel = "spring")
public abstract class ProductMapper {

    public Product toProduct(ProductRequestDTO createProductRequestDTO) {
        Product p = new Product();
        p.setName(createProductRequestDTO.getName());
        p.setPrice(createProductRequestDTO.getPrice());
        p.setPublisher(createProductRequestDTO.getPublisher());
        p.setReleaseDate(LocalDate.now());
        p.setImageUrl(createProductRequestDTO.getImageUrl());
        p.setCategories(createProductRequestDTO.getCategories());
        p.setDescription(createProductRequestDTO.getDescription());
        return p;
    }

    @Mapping(target = "releaseDate", ignore = true)
    public abstract void updateExistingProductFromDTO(ProductRequestDTO dto, @MappingTarget Product existingProduct);

}
