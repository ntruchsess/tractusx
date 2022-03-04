package net.catenax.portal.repository;

import org.springframework.data.repository.PagingAndSortingRepository;

import net.catenax.portal.model.IdentityProvider;

public interface IdentityProviderRepository extends PagingAndSortingRepository<IdentityProvider, String> {

}
