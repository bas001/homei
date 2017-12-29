package de.homei.aufgabenservice

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*

const val TITEL = "titel"
const val JSON = "application/json"
@RestController
@RequestMapping(value = "/aufgaben", produces = arrayOf(JSON))
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
    @ResponseStatus(HttpStatus.CREATED)
    fun aufgabeAnlegen(@RequestBody aufgabeRequest : AufgabeAnlegenRequest) : Aufgabe {
        return aufgabeRepository.save(Aufgabe.erzeuge(aufgabeRequest))
    }

    @PatchMapping
    fun aufgabeEditieren(@RequestBody aufgabeRequest : AufgabeEditierenRequest) : Aufgabe? {
        val aufgabe = aufgabeRepository.findOne(aufgabeRequest.id)
        if (aufgabe != null) {
            return aufgabeRepository.save(aufgabe.editiere(aufgabeRequest))
        }
        return null
    }
}

class AufgabeAnlegenRequest(val titel: String, val beschreibung : String) {
    constructor() : this("", "")
}

class AufgabeEditierenRequest(val id: Int, val titel: String, val beschreibung : String, val status: String) {
    constructor() : this(0, "", "", "")
}
