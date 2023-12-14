package com.example.sp_shopping_cart.dtos.purchase;

import java.util.List;

import com.example.sp_shopping_cart.models.product.Product;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class PurchaseRequestDTO {
    private Long userId;
    private List<Product> products;
    private double totalAmount;
    private String cardNumber;

}
