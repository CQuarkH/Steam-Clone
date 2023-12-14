package com.example.sp_shopping_cart.dtos.mappers;

import java.time.LocalDateTime;

import org.mapstruct.Mapper;

import com.example.sp_shopping_cart.dtos.purchase.PurchaseRequestDTO;
import com.example.sp_shopping_cart.models.payment.Payment;
import com.example.sp_shopping_cart.models.payment.PaymentMethod;

@Mapper(componentModel = "spring")
public abstract class PaymentMapper {

    public Payment fromDTO(PurchaseRequestDTO purchaseRequestDTO) {
        Payment p = new Payment();
        p.setAmount(purchaseRequestDTO.getTotalAmount());
        p.setPaymentMethod(PaymentMethod.CREDIT_CARD);
        p.setLastFourDigits(purchaseRequestDTO.getCardNumber());
        p.setPaymentDateTime(LocalDateTime.now());
        return p;
    }

}
