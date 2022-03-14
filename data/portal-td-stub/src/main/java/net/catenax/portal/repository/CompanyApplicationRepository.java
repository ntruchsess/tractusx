package net.catenax.portal.repository;

import org.springframework.data.repository.PagingAndSortingRepository;

import net.catenax.portal.model.CompanyApplication;

public interface CompanyApplicationRepository extends PagingAndSortingRepository<CompanyApplication, String> {

}
