package com.example.sp_shopping_cart.dtos.mappers;

import org.mapstruct.Mapper;

import com.example.sp_shopping_cart.dtos.discount.DiscountRequestDTO;
import com.example.sp_shopping_cart.models.discount.DiscountCode;

@Mapper(componentModel = "spring")
public abstract class DiscountCodeMapper {

    public DiscountCode discountCodeFromDTO(DiscountRequestDTO discountRequestDTO) {
        DiscountCode d = new DiscountCode();
        d.setCode(discountRequestDTO.getCode());
        d.setValue(discountRequestDTO.getValue());
        return d;
    }

}
