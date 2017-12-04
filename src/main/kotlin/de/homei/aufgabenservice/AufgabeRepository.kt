package de.homei.aufgabenservice

import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Repository
interface AufgabeRepository : CrudRepository<Aufgabe, Int> {
    override fun findAll() : List<Aufgabe>
    fun findByTitel(titel : String): List<Aufgabe>
}