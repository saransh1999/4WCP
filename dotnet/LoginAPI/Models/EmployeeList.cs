using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace LoginAPI2.Models;
[Table("EmployeeList")]
public partial class EmployeeList
{
    public string ResourceName { get; set; } = null!;

    public string ResourceId { get; set; }

    public string Passwords { get; set; } = null!;

    public string? IsManager { get; set; }
}
