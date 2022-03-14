package net.catenax.portal.repository;

import org.springframework.data.repository.PagingAndSortingRepository;

import net.catenax.portal.model.UseCase;

public interface UseCaseRepository extends PagingAndSortingRepository<UseCase, String> {

}
