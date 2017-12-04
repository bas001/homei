package de.homei.aufgabenservice

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*

const val TITEL = "titel"

@RestController
@RequestMapping("/aufgaben")
class AufgabeController {

    @Autowired lateinit var aufgabeRepository : AufgabeRepository

    @GetMapping(params = arrayOf(TITEL))
    fun getAufgaben(@RequestParam titel: String) : List<Aufgabe> {
        return aufgabeRepository.findByTitel(titel)
    }

    @GetMapping
    fun getAllAufgaben() : List<Aufgabe> {
        return aufgabeRepository.findAll()
    }

    @PostMapping
    fun aufgabeAnlegen(@RequestBody aufgabeRequest : AufgabeAnlegenRequest ) : Aufgabe {
        return aufgabeRepository.save(Aufgabe.erzeuge(aufgabeRequest))
    }
}

class AufgabeAnlegenRequest(val titel: String, val beschreibung : String)
