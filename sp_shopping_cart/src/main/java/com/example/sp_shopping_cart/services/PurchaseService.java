package com.example.sp_shopping_cart.services;

import org.springframework.stereotype.Service;

import com.example.sp_shopping_cart.dtos.mappers.PaymentMapper;
import com.example.sp_shopping_cart.dtos.purchase.PurchaseRequestDTO;
import com.example.sp_shopping_cart.models.order.CustomerOrder;
import com.example.sp_shopping_cart.models.payment.Payment;
import com.example.sp_shopping_cart.repositories.PaymentRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PurchaseService {

    private final PaymentMapper paymentMapper;
    private final PaymentRepository paymentRepository;

    private final OrderService orderService;

    public CustomerOrder processPurchase(PurchaseRequestDTO purchaseRequestDTO) throws Exception {
        try {
            System.out.println(purchaseRequestDTO);
            Payment p = processPayment(purchaseRequestDTO);
            return orderService.createOrder(purchaseRequestDTO, p);

        } catch (Exception e) {
            throw new Exception("Error processing purchase: " + e.getMessage());
        }

    }

    private Payment processPayment(PurchaseRequestDTO purchaseRequestDTO) throws Exception {
        try {
            // API validation in the next version
            Payment p = paymentMapper.fromDTO(purchaseRequestDTO);
            return paymentRepository.save(p);

        } catch (Exception e) {
            throw new Exception("Error processing payment: " + e.getMessage());
        }
    }

}
