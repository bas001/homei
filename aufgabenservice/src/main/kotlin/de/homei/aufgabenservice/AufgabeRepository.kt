package de.homei.aufgabenservice

import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Repository
interface AufgabeRepository : CrudRepository<Aufgabe, Int> {
    fun findAllByOrderByErstelltAmDesc(): List<Aufgabe>
    fun findByStatusOrderByErstelltAmDesc(status: Status): List<Aufgabe>
    fun findByTitel(titel: String): List<Aufgabe>
}