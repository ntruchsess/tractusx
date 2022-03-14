package net.catenax.portal.repository;

import org.springframework.data.repository.PagingAndSortingRepository;

import net.catenax.portal.model.Address;

public interface AddressRepository extends PagingAndSortingRepository<Address, String> {

}
