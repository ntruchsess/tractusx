package net.catenax.portal.repository;

import org.springframework.data.repository.PagingAndSortingRepository;

import net.catenax.portal.model.AppLicense;

public interface AppLicenseRepository extends PagingAndSortingRepository<AppLicense, String> {

}
