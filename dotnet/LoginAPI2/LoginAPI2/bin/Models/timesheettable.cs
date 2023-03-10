using System;
using System.Collections.Generic;

namespace LoginAPI2.Models;

public partial class timesheettable
{
    public string ResourceName { get; set; } = null!;

    public int ResourceId { get; set; }

    public DateTime PeriodStart { get; set; }

    public DateTime PeriodEnd { get; set; }

    public float HoursDone { get; set; }

    public string? ApprovalStatus { get; set; }

    public string TimesheetNumber { get; set; } = null!;

	public DateTime HoursRequired { get; set; }

	public string Vertical { get; set; } = null!;

    public string Horizontal { get; set; } = null!;

    public string SubHorizontal { get; set; } = null!;

    public string? CustomerId { get; set; }

    public string? CustomerName { get; set; }

    public string ProjectId { get; set; } = null!;

    public string ProjectName { get; set; } = null!;

    public string ProjectManager { get; set; } = null!;
}
