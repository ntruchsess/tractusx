package net.catenax.portal.repository;

import org.springframework.data.repository.PagingAndSortingRepository;

import net.catenax.portal.model.DocumentTemplate;

public interface DocumentTemplateRepository extends PagingAndSortingRepository<DocumentTemplate, String> {

}
