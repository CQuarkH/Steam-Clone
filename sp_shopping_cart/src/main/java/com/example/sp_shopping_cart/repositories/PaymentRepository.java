package com.example.sp_shopping_cart.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.sp_shopping_cart.models.payment.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Long> {

}
