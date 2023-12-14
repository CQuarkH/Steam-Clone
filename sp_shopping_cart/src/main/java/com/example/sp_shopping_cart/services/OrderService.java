package com.example.sp_shopping_cart.services;

import org.springframework.stereotype.Service;

import com.example.sp_shopping_cart.dtos.mappers.OrderMapper;
import com.example.sp_shopping_cart.dtos.order.GetOrdersResponseDTO;
import com.example.sp_shopping_cart.dtos.purchase.PurchaseRequestDTO;
import com.example.sp_shopping_cart.models.order.CustomerOrder;
import com.example.sp_shopping_cart.models.payment.Payment;
import com.example.sp_shopping_cart.repositories.OrderRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class OrderService {

    private final OrderRepository orderRepository;
    private final OrderMapper orderMapper;

    public CustomerOrder createOrder(PurchaseRequestDTO purchaseRequestDTO, Payment payment) throws Exception {
        try {
            CustomerOrder order = orderMapper.fromPurchaseAndPayment(purchaseRequestDTO, payment);
            orderMapper.mapProductsToOrderItemsAndAssociate(order, purchaseRequestDTO.getProducts());
            return orderRepository.save(order);

        } catch (Exception e) {
            throw new Exception("Error creating order: " + e.getMessage());
        }

    }

    public GetOrdersResponseDTO getOrdersByUserId(Long userId) throws Exception {
        try {
            return GetOrdersResponseDTO.builder().orders(orderRepository.findByUserId(userId)).build();
        } catch (Exception e) {
            throw new Exception("Error fetching orders by User ID: " + e.getMessage());
        }

    }

    public CustomerOrder getOrderById(Long orderId) throws Exception {
        try {
            CustomerOrder order = orderRepository.findById(orderId).get();
            if (order == null) {
                throw new Exception("This order doesn't exist!");
            }
            return order;
        } catch (Exception e) {
            throw new Exception("Error fetching order by ID: " + e.getMessage());
        }
    }

    public GetOrdersResponseDTO getOrders() throws Exception {
        try {
            return GetOrdersResponseDTO.builder().orders(orderRepository.findAll()).build();
        } catch (Exception e) {
            throw new Exception("Error fetching orders: " + e.getMessage());
        }
    }

}
