package de.homei.aufgabenservice

import java.time.LocalDate
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id

@Entity
data class Aufgabe constructor(
        var titel: String,
        var beschreibung: String,
        var erstelltAm: LocalDate,
        @Id @GeneratedValue var id: Int = 0
) {
    companion object Factory {
        fun erzeuge(aufgabeRequest: AufgabeAnlegenRequest): Aufgabe =
                Aufgabe(aufgabeRequest.titel, aufgabeRequest.beschreibung, LocalDate.now())
    }
}
