package com.example.sp_shopping_cart.controllers;

import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.sp_shopping_cart.dtos.purchase.PurchaseRequestDTO;
import com.example.sp_shopping_cart.services.DiscountCodeService;
import com.example.sp_shopping_cart.services.OrderService;
import com.example.sp_shopping_cart.services.ProductService;
import com.example.sp_shopping_cart.services.PurchaseService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class UserController {

    private final ProductService productService;
    private final PurchaseService purchaseService;
    private final DiscountCodeService discountCodeService;
    private final OrderService orderService;

    @GetMapping("/products")
    public ResponseEntity<?> getProducts(Pageable pageable) {
        try {
            return ResponseEntity.ok(productService.getProducts(pageable));
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/products/{productId}")
    public ResponseEntity<?> getProductById(@PathVariable Long productId) {
        try {
            return ResponseEntity.ok(productService.getProductById(productId));
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/validate-discount/{discountCode}")
    public ResponseEntity<?> validateDiscount(@PathVariable String discountCode) {
        try {
            return ResponseEntity.ok(discountCodeService.validateDiscountCode(discountCode));
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/orders-by-user/{userId}")
    public ResponseEntity<?> getOrders(@PathVariable Long userId) {
        try {
            return ResponseEntity.ok(orderService.getOrdersByUserId(userId));
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/orders/{orderId}")
    public ResponseEntity<?> getOrderById(@PathVariable Long orderId) {
        try {
            return ResponseEntity.ok(orderService.getOrderById(orderId));

        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/buy")
    public ResponseEntity<?> buyCart(@RequestBody PurchaseRequestDTO purchaseRequestDTO) {
        try {
            return ResponseEntity.ok(purchaseService.processPurchase(purchaseRequestDTO));
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

}
