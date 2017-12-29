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
        var status: Status,
        @Id @GeneratedValue var id: Int = 0
) {
    companion object Factory {
        fun erzeuge(aufgabeRequest: AufgabeAnlegenRequest): Aufgabe =
                Aufgabe(aufgabeRequest.titel, aufgabeRequest.beschreibung, LocalDate.now(), Status.OFFEN)
    }

    fun editiere(aufgabeRequest: AufgabeEditierenRequest) : Aufgabe {
        this.titel = aufgabeRequest.titel
        this.beschreibung = aufgabeRequest.beschreibung
        this.status = Status.valueOf(aufgabeRequest.status)
        return this
    }

}
