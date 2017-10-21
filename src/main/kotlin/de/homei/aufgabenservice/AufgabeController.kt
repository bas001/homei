package de.homei.aufgabenservice

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
class AufgabeController {

    @Autowired lateinit var aufgabeRepository : AufgabeRepository

    @GetMapping("/aufgaben")
    fun getAufgabenByTitel(@RequestParam(value = "titel") titel: String) : List<Aufgabe> {
        return aufgabeRepository.findByTitel(titel)
    }
}