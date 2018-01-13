package de.homei.aufgabenservice

import java.sql.Timestamp
import java.time.LocalDateTime
import javax.persistence.AttributeConverter
import javax.persistence.Converter

/**
 * Converter fuer Hibernate von LocalDate nach SqlDate
 */
@Converter(autoApply = true)
class LocalDateAttributeConverter : AttributeConverter<LocalDateTime, Timestamp> {
    override fun convertToEntityAttribute(sqlTimestamp: Timestamp?): LocalDateTime? {
        return sqlTimestamp?.toLocalDateTime()
    }

    override fun convertToDatabaseColumn(locDateTime: LocalDateTime?) : Timestamp? {
        return  if (locDateTime == null) null!! else Timestamp.valueOf(locDateTime)
    }
}