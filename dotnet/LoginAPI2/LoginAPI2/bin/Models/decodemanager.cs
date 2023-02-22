using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace LoginAPI2.Models;
public partial class decodemanager
{
    public string ResourceName { get; set; } = null!;

    public int ResourceId { get; set; }

    public string Passwords { get; set; } = null!;

    public string? IsManager { get; set; }
}
