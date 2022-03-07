package net.catenax.portal.repository;

import org.springframework.data.repository.PagingAndSortingRepository;

import net.catenax.portal.model.Document;

public interface DocumentRepository extends PagingAndSortingRepository<Document, String> {

}
