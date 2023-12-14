package com.example.sp_shopping_cart.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.sp_shopping_cart.models.discount.DiscountCode;
import java.util.Optional;

@Repository
public interface DiscountCodeRepository extends JpaRepository<DiscountCode, String> {

    boolean existsByCode(String code);

    Optional<DiscountCode> findByCode(String code);

    void deleteByCode(String code);

}
