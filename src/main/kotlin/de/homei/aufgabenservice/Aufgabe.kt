package de.homei.aufgabenservice

import java.time.LocalDate
import javax.persistence.Entity
import javax.persistence.Id

@Entity
data class Aufgabe (
        @Id var id: Int,
        var titel: String,
        var beschreibung: String,
        var erstelltAm: LocalDate
)
