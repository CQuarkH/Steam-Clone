package com.example.sp_shopping_cart.dtos.mappers;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import org.mapstruct.Mapper;

import com.example.sp_shopping_cart.dtos.purchase.PurchaseRequestDTO;
import com.example.sp_shopping_cart.models.order.CustomerOrder;
import com.example.sp_shopping_cart.models.order.OrderItem;
import com.example.sp_shopping_cart.models.payment.Payment;
import com.example.sp_shopping_cart.models.product.Product;

@Mapper(componentModel = "spring")
public abstract class OrderMapper {

    public CustomerOrder fromPurchaseAndPayment(PurchaseRequestDTO purchaseRequestDTO, Payment payment) {
        CustomerOrder order = new CustomerOrder();
        order.setPayment(payment);
        order.setOrderDateTime(LocalDateTime.now());
        order.setUserId(purchaseRequestDTO.getUserId());
        return order;
    }

    public void mapProductsToOrderItemsAndAssociate(CustomerOrder order, List<Product> products) {
        List<OrderItem> orderItems = mapProductsToOrderItems(products);
        for (OrderItem item : orderItems) {
            item.setOrder(order);
        }
        order.setOrderItems(orderItems);
    }

    protected List<OrderItem> mapProductsToOrderItems(List<Product> products) {
        return products.stream()
                .map(this::convertProductToOrderItem)
                .collect(Collectors.toList());
    }

    private OrderItem convertProductToOrderItem(Product product) {
        OrderItem orderItem = new OrderItem();
        orderItem.setProduct(product);
        orderItem.setQuantity(1);
        return orderItem;
    }

}
