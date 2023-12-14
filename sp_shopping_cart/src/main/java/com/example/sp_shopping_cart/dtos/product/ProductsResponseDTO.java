package com.example.sp_shopping_cart.dtos.product;

import java.util.List;

import com.example.sp_shopping_cart.models.product.Product;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ProductsResponseDTO {
    private List<Product> products;

}
