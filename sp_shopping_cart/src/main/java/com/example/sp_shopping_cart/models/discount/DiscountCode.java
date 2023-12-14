package com.example.sp_shopping_cart.models.discount;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class DiscountCode {

    @Id
    private String code;
    private double value;

}
