package de.homei.aufgabenservice

import org.junit.Assert.assertEquals
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.junit.jupiter.SpringExtension
import java.time.LocalDate


@SpringBootTest
@ExtendWith(SpringExtension::class)
class AufgabeRepositoryTest {

    @Autowired
    lateinit var aufgabeRepository: AufgabeRepository

    @Test
    fun writeTest() {
        val erstelltAm = LocalDate.now()
        val aufgabe = Aufgabe("titel1", "3", erstelltAm, Status.OFFEN)
        aufgabeRepository.save(aufgabe)
        val findByTitel = aufgabeRepository.findByTitel("titel1")
        assertEquals(findByTitel.single().titel, "titel1")
        assertEquals(findByTitel.single().beschreibung, "3")
        assertEquals(findByTitel.single().erstelltAm, erstelltAm)

        aufgabeRepository.delete(aufgabe)
    }

    @Test
    fun readTest() {
        val findAll = aufgabeRepository.findAllByOrderByErstelltAmDesc()
        assertEquals(findAll.isNotEmpty(), true)

    }

}