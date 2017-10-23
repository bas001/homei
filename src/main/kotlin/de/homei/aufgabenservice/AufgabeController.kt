package de.homei.aufgabenservice

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
class AufgabeController {

    @Autowired lateinit var aufgabeRepository : AufgabeRepository

    @GetMapping("/aufgaben", params = Array(1,"titel"))
    fun getAufgabenByTitel(@RequestParam(value = "titel", required = true) titel: String) : List<Aufgabe> {
        return aufgabeRepository.findByTitel(titel)
    }

    @GetMapping("/aufgaben")
    fun getAllAufgaben() : List<Aufgabe> {
        return aufgabeRepository.findAll()
    }
}