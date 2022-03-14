package net.catenax.portal.repository;

import java.util.Optional;

import org.springframework.data.repository.PagingAndSortingRepository;

import net.catenax.portal.model.Company;
import net.catenax.portal.model.Invitation;

public interface CompanyRepository extends PagingAndSortingRepository<Company, String> {

	public Iterable<Company> findAllByName(String name);

	public Optional<Company> findByName(String name);
	
	public Optional<Company> findByCompanyID(String uuid);

}
