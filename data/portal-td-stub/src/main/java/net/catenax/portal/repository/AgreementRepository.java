package net.catenax.portal.repository;

import org.springframework.data.repository.PagingAndSortingRepository;

import net.catenax.portal.model.Agreement;

public interface AgreementRepository extends PagingAndSortingRepository<Agreement, String> {

}
