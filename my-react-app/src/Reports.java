package com.attendane.springboot.entities;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name="Reports")
public class Reports {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer reportId;

    @ManyToOne
    @JoinColumn(name ="teacher_id", nullable = false)
    private Teachers teacher;

    @Column(nullable = false)
    private LocalDate reportDate;

    @ManyToOne
    @JoinColumn(name = "student_id", nullable = false)
    private Studentinfo student;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private AttendanceStatus attendanceStatus;

    // Default constructor, getters, setters, and toString()
    public Integer getReportId() {
        return reportId;
    }

    public void setReportId(Integer reportId) {
        this.reportId = reportId;
    }

    public Teachers getTeacher  () {
        return teacher;
    }

    public void setTeacher(Teachers teacher) {
        this.teacher = teacher;
    }

    public LocalDate getReportDate() {
        return reportDate;
    }

    public void setReportDate(LocalDate reportDate) {
        this.reportDate = reportDate;
    }

    public Studentinfo getStudent() {
        return student;
    }

    public void setStudent(Studentinfo student) {
        this.student = student;
    }

    public AttendanceStatus getAttendanceStatus() {
        return attendanceStatus;
    }

    public void setAttendanceStatus(AttendanceStatus attendanceStatus) {
        this.attendanceStatus = attendanceStatus;
    }

    public enum AttendanceStatus {
        PRESENT, ABSENT
    }
}
