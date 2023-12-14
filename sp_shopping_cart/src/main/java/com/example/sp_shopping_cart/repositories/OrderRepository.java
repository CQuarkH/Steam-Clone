package com.example.sp_shopping_cart.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.sp_shopping_cart.models.order.CustomerOrder;
import java.util.List;

public interface OrderRepository extends JpaRepository<CustomerOrder, Long> {

    List<CustomerOrder> findByUserId(Long userId);

}
