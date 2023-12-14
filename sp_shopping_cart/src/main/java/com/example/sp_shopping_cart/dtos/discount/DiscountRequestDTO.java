package com.example.sp_shopping_cart.dtos.discount;

import lombok.Data;

@Data
public class DiscountRequestDTO {
    private String code;
    private double value;

}
