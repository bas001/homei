package de.homei.aufgabenservice

import java.time.LocalDateTime
import javax.persistence.*

@Entity
data class Aufgabe constructor(
        var titel: String,
        var beschreibung: String,
        var erstelltAm: LocalDateTime,
        @Enumerated(EnumType.STRING)
        var status: Status,
        @Id @GeneratedValue var id: Int = 0
) {
    companion object Factory {
        fun erzeuge(aufgabeRequest: AufgabeAnlegenRequest): Aufgabe =
                Aufgabe(aufgabeRequest.titel, aufgabeRequest.beschreibung, LocalDateTime.now(), Status.OFFEN)
    }

    fun editiere(aufgabeRequest: AufgabeEditierenRequest): Aufgabe {

        this.titel = aufgabeRequest.titel
        this.beschreibung = aufgabeRequest.beschreibung
        this.status = Status.valueOf(aufgabeRequest.status)
        return this
    }

}
