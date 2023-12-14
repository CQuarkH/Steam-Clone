package com.example.sp_shopping_cart.models.product;

import java.time.LocalDate;
import java.util.List;

import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import lombok.Data;

@Entity
@Data
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private double price;
    private String publisher;
    private LocalDate releaseDate;

    @Column(columnDefinition = "TEXT")
    private String imageUrl;

    @Column(columnDefinition = "TEXT")
    private String description;

    @ElementCollection(targetClass = ProductCategory.class)
    @Enumerated(EnumType.STRING)
    @CollectionTable(name = "product_category", joinColumns = @JoinColumn(name = "product_id"))
    @Column(name = "category")
    private List<ProductCategory> categories;

}
