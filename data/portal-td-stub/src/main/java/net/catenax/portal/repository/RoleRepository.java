package net.catenax.portal.repository;

import org.springframework.data.repository.PagingAndSortingRepository;

import net.catenax.portal.model.Role;

public interface RoleRepository extends PagingAndSortingRepository<Role, String> {

}
