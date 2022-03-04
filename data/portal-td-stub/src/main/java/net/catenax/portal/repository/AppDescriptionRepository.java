package net.catenax.portal.repository;

import org.springframework.data.repository.PagingAndSortingRepository;

import net.catenax.portal.model.AppDescription;

public interface AppDescriptionRepository extends PagingAndSortingRepository<AppDescription, String> {

}
