package tr.com.huseyinaydin.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import tr.com.huseyinaydin.model.Car;

@RepositoryRestResource
@CrossOrigin(origins = "http://localhost:4200")
public interface CarRepository extends JpaRepository<Car, Long> {
}