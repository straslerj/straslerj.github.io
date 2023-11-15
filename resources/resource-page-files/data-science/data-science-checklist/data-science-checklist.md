#### DATA REVIEW

- [] The data sources are identified.
- [] Does the output variable depend on time?
- [] Do the records belong to groups (e.g., multiple medical test results or images per patient, with each result or image represented by a single record) or are they independent?
- [] Were the data checked for class imbalance?

#### DATA CLEANING

- [] Each row corresponds to a single sample and vice versa.
- [] Each variable has its own column.
- [] Variables are sometimes combined. For example, a column describing car transmissions may have string values like “6-cyl, RWD, conventional” and “4-cyl, AWD, hybrid”. The column should be separated into three separate variables, each with their own column.
- [] All of values in each column are formatted consistently (e.g., state names are all spelled and capitalized in a consistent manner, dates are all formatted as YY-MM-DD).
- [] All values in each column have the same types (e.g., categorical, int, float).
- [] All values in each column have the same units (e.g., inches, USD).
- [] Any missing values are identified, handled appropriately, and documented.
- [] Any outlier or unexpected values or records are identified, handled appropriately, and documented.

#### VISUALIZATIONS

- [] Are the appropriate types of plots (e.g., histograms, line plots, scatter plots, and box plots) fused or the number and types of variables being compared?
- [] Are plot axes labeled appropriately?
- [] Are font sizes legible?
- [] Are the plots 150 DPI or higher?

#### COMMUNICATION

- [] Analyses were interpreted and explained in a way understandable by a colleague who is familiar with the domain but not data science or statistics.
- [] Each conclusion was stated clearly.
- [] Visuals and statistics were used effectively to support conclusions.
