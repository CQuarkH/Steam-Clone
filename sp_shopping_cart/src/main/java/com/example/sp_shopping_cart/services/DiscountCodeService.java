package com.example.sp_shopping_cart.services;

import org.springframework.stereotype.Service;

import com.example.sp_shopping_cart.dtos.discount.DiscountRequestDTO;
import com.example.sp_shopping_cart.dtos.discount.GetDiscountCodesResponseDTO;
import com.example.sp_shopping_cart.dtos.mappers.DiscountCodeMapper;
import com.example.sp_shopping_cart.models.discount.DiscountCode;
import com.example.sp_shopping_cart.repositories.DiscountCodeRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class DiscountCodeService {

    private final DiscountCodeRepository discountCodeRepository;
    private final DiscountCodeMapper discountCodeMapper;

    public DiscountCode createDiscountCode(DiscountRequestDTO discountRequestDTO) throws Exception {
        try {
            if (!discountCodeRepository.existsByCode(discountRequestDTO.getCode())) {
                return discountCodeRepository.save(discountCodeMapper.discountCodeFromDTO(discountRequestDTO));
            } else {
                throw new Exception("This discount code already exists!");
            }

        } catch (Exception e) {
            throw new Exception("Error creating discount code: " + e.getMessage());

        }

    }

    public GetDiscountCodesResponseDTO getDiscountCodes() throws Exception {
        try {
            return GetDiscountCodesResponseDTO.builder().discountCodes(discountCodeRepository.findAll()).build();
        } catch (Exception e) {
            throw new Exception("Error fetching discount codes: " + e.getMessage());
        }

    }

    public void deleteDiscountCode(String code) throws Exception {
        try {
            DiscountCode d = getByCode(code);
            discountCodeRepository.deleteByCode(d.getCode());
        } catch (Exception e) {
            throw new Exception("Error deleting discount code: " + e.getMessage());
        }

    }

    public double validateDiscountCode(String code) throws Exception {
        try {
            DiscountCode d = getByCode(code);
            return d.getValue();

        } catch (Exception e) {
            throw new Exception("Error validating discount code: " + e.getMessage());
        }

    }

    private DiscountCode getByCode(String code) throws Exception {
        return discountCodeRepository.findByCode(code)
                .orElseThrow(() -> new Exception("This code doesn't exist!"));
    }

}
