package com.example.sp_shopping_cart.dtos.product;

import java.util.List;

import com.example.sp_shopping_cart.models.product.ProductCategory;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ProductRequestDTO {
    private Long id;
    private String name;
    private double price;
    private String publisher;
    private String imageUrl;
    private String description;
    private List<ProductCategory> categories;

}
