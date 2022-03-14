package net.catenax.portal.repository;

import org.springframework.data.repository.PagingAndSortingRepository;

import net.catenax.portal.model.Consent;

public interface ConsentRepository extends PagingAndSortingRepository<Consent, String> {

}
