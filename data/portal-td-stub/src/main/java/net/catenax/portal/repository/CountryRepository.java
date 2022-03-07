package net.catenax.portal.repository;

import org.springframework.data.repository.PagingAndSortingRepository;

import net.catenax.portal.model.Country;

public interface CountryRepository extends PagingAndSortingRepository<Country, String> {

}
