package com.example.sp_shopping_cart.controllers;

import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.sp_shopping_cart.dtos.discount.DiscountRequestDTO;
import com.example.sp_shopping_cart.dtos.product.ProductRequestDTO;
import com.example.sp_shopping_cart.services.DiscountCodeService;
import com.example.sp_shopping_cart.services.OrderService;
import com.example.sp_shopping_cart.services.ProductService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class AdminController {

    private final ProductService productService;
    private final OrderService orderService;
    private final DiscountCodeService discountCodeService;

    @GetMapping("/products")
    public ResponseEntity<?> getProducts(Pageable pageable) {
        try {
            return ResponseEntity.ok(productService.getProducts(pageable));

        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/products")
    public ResponseEntity<?> createProduct(@RequestBody ProductRequestDTO createProductRequestDTO) {
        try {
            return ResponseEntity.ok(productService.createProduct(createProductRequestDTO));

        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }

    }

    @PutMapping("/products/{productId}")
    public ResponseEntity<?> updateProduct(@PathVariable Long productId,
            @RequestBody ProductRequestDTO productRequestDTO) {
        try {
            productRequestDTO.setId(productId);
            return ResponseEntity.ok(productService.updateProduct(productRequestDTO));

        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/products/{productId}")
    public ResponseEntity<?> deleteProduct(@PathVariable Long productId) {
        try {
            productService.deleteProductById(productId);
            return ResponseEntity.ok().build();

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

    @GetMapping("/orders")
    public ResponseEntity<?> getOrders() {
        try {
            return ResponseEntity.ok(orderService.getOrders());

        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/orders/user/{userId}")
    public ResponseEntity<?> getOrdersByUserId(@PathVariable Long userId) {
        try {
            return ResponseEntity.ok(orderService.getOrdersByUserId(userId));
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/discounts")
    public ResponseEntity<?> createDiscountCode(@RequestBody DiscountRequestDTO discountRequestDTO) {
        try {
            return ResponseEntity.ok(discountCodeService.createDiscountCode(discountRequestDTO));
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/discounts")
    public ResponseEntity<?> getDiscountCodes() {
        try {
            return ResponseEntity.ok(discountCodeService.getDiscountCodes());
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/discounts/{discountId}")
    public ResponseEntity<?> deleteDiscountCode(@PathVariable String code) {
        try {
            discountCodeService.deleteDiscountCode(code);
            return ResponseEntity.ok().build();

        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

}
