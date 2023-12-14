package com.example.sp_shopping_cart.dtos.order;

import java.util.List;

import com.example.sp_shopping_cart.models.order.CustomerOrder;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class GetOrdersResponseDTO {
    private List<CustomerOrder> orders;

}
