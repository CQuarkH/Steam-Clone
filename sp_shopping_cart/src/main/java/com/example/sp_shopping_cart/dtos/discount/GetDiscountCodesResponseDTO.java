package com.example.sp_shopping_cart.dtos.discount;

import java.util.List;

import com.example.sp_shopping_cart.models.discount.DiscountCode;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class GetDiscountCodesResponseDTO {
    private List<DiscountCode> discountCodes;

}
