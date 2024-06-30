searchState.loadedDescShard("polars", 1, "Returns the day of year starting from 1.\nExtract ordinal year from underlying NaiveDateTime …\nExtract quarter from underlying NaiveDateTime …\nExtract second from underlying NaiveDateTime …\nConvert from Time into String with the given format. See …\nConvert date(time) object to timestamp in <code>TimeUnit</code>.\nConvert Time into String with the given format. See chrono …\nReturns the ISO week number starting from 1. The return …\nReturns the ISO weekday number where monday = 1 and sunday …\nExtract year from underlying NaiveDateTime representation. …\nUtility trait to slice concrete arrow arrays whilst …\nSlices this <code>Array</code>.\nSlices the <code>Array</code>.\nUtility trait to slice concrete arrow arrays whilst …\nSlices this <code>Array</code>.\nSlices the <code>Array</code>.\nReturn the indices of the bottom k elements.\nUtility trait to slice concrete arrow arrays whilst …\nSort options for multi-series sorting.\nOptions for single series sorting.\nIf true sort in descending order. Default <code>false</code>.\nOrder of the columns. Default all `false``.\nIf true maintain the order of equal elements. Default <code>false</code>…\nWhether maintain the order of equal elements. Default <code>false</code>…\nIf true sort in multiple threads. Default <code>true</code>.\nWhether sort in multiple threads. Default <code>true</code>.\nWhether place null values last. Default <code>false</code>.\nWhether place null values last. Default <code>false</code>.\nSlices this <code>Array</code>.\nSlices the <code>Array</code>.\nConcat with the values from a second StringChunked.\nCheck if strings contain a regex pattern.\nCheck if strings contain a given literal\nCount all successive non-overlapping regex matches.\nCount all successive non-overlapping regex matches.\nExtract the nth capture group from pattern.\nExtract each successive non-overlapping regex match in an …\nExtract each successive non-overlapping regex match in an …\nExtract all capture groups from pattern and return as a …\nReturn the index position of a regular expression …\nReturn the index position of a literal substring in the …\nHorizontally concatenate all strings.\nReplace the leftmost regex-matched (sub)string with …\nReplace all regex-matched (sub)strings with another string\nReplace the leftmost literal (sub)string with another …\nReplace all matching literal (sub)strings with another …\nSlice the first <code>n</code> values of the string.\nGet the length of the string values as number of bytes.\nGet the length of the string values as number of chars.\nReverses the string values\nSlice the string values.\nSlice the last <code>n</code> values of the string.\nModify the strings to their lowercase equivalent.\nModify the strings to their titlecase equivalent.\nModify the strings to their uppercase equivalent.\nRepresents a user-defined function\nThe function implementation.\nThe function signature.\nname\nOptions for the function.\nThe function output type.\nCompare <code>Series</code> and <code>ChunkedArray</code>’s and get a <code>boolean</code> mask …\nUsed to convert a <code>ChunkedArray</code>, <code>&amp;dyn SeriesTrait</code> and <code>Series</code>\nSeries\nSafety\nCreate a new Series without checking if the inner dtype of …\nAppend in place. This is done by adding the chunks of <code>other</code>…\nRetrieve the indexes needed for a sort.\nGet first indexes of unique values.\nUnpack to <code>ChunkedArray</code> of dtype <code>[DataType::Array]</code>\nReturns a reference to the Arrow ArrayRef\nGet a hold to self as <code>Any</code> trait reference.\nGet a hold to self as <code>Any</code> trait reference. Only …\nPacks every element into a list.\nRechunk and return a pointer to the start of the Series. …\nOnly implemented for numeric types\nUnpack to <code>ChunkedArray</code> of dtype <code>[DataType::Binary]</code>\nUnpack to <code>ChunkedArray</code> of dtype <code>[DataType::Binary]</code>\nUnpack to <code>ChunkedArray</code> of dtype <code>[DataType::Boolean]</code>\nCast from physical to logical types without any checks on …\nCast <code>[Series]</code> to another <code>[DataType]</code>.\nUnpack to <code>ChunkedArray</code> of dtype <code>[DataType::Categorical]</code>\nGet the lengths of the underlying chunks\nUnderlying chunks.\nUnderlying chunks.\nSafety\nClone inner ChunkedArray and wrap in a new Arc\nRedo a length and null_count compute\nUnpack to <code>ChunkedArray</code> of dtype <code>[DataType::Date]</code>\nUnpack to <code>ChunkedArray</code> of dtype <code>[DataType::Datetime]</code>\nUnpack to <code>ChunkedArray</code> of dtype <code>[DataType::Decimal]</code>\nDrop all null values and return a new Series.\nGet datatype of series.\nUnpack to <code>ChunkedArray</code> of dtype <code>[DataType::Duration]</code>\nCheck for equality.\nCreate a boolean mask by checking for equality.\nCheck for equality where <code>None == None</code>.\nCreate a boolean mask by checking for equality.\nCheck if series are equal. Note that <code>None == None</code> …\nCheck if all values in series are equal where <code>None == None</code> …\nReturns an estimation of the total (heap) allocated size …\nExplode a list Series. This expands every item to a new …\nExtend the memory backed by this array with the values …\nExtend with a constant value.\nUnpack to <code>ChunkedArray</code> of dtype <code>[DataType::Float32]</code>\nUnpack to <code>ChunkedArray</code> of dtype <code>[DataType::Float64]</code>\nGet field (used in schema)\nReplace None values with one of the following strategies:\nFilter by boolean mask. This operation clones data.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConstruct a new <code>Series</code> from a slice of AnyValues.\nConstruct a new <code>Series</code> with the given <code>dtype</code> from a slice …\nTakes chunks and a polars datatype and constructs the …\nTraverse and collect every nth element in a new array.\nGet a single value by index. Don’t use this operation …\nGet a pointer to the underlying data of this <code>Series</code>. Can …\nRecurse nested types until we are at the leaf array.\nGet the value at this index as a downcastable Any trait …\nGet the value at this index as a downcastable Any trait …\nGet a single value by index. Don’t use this operation …\nGreater than comparison.\nCreate a boolean mask by checking if self &gt; rhs.\nGreater than or equal comparison.\nCreate a boolean mask by checking if self &gt;= rhs.\nReturn if any the chunks in this <code>[ChunkedArray]</code> have a …\nGet the head of the Series.\nUnpack to <code>ChunkedArray</code> of dtype <code>[DataType::Int16]</code>\nUnpack to <code>ChunkedArray</code>\nUnpack to <code>ChunkedArray</code> of dtype <code>[DataType::Int64]</code>\nUnpack to <code>ChunkedArray</code> of dtype <code>[DataType::Int8]</code>\nConvert the values of this Series to a ListChunked with a …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCheck if Series is empty.\nCheck if numeric value is finite\nCheck if float value is infinite\nCheck if float value is NaN (note this is different than …\nCheck if float value is NaN (note this is different than …\nGet a mask of the non-null values.\nGet a mask of the null values.\niterate over <code>Series</code> as <code>AnyValue</code>.\nGet length of series.\nTake <code>num_elements</code> from the top as a zero copy view.\nUnpack to <code>ChunkedArray</code> of dtype list\nLess than comparison.\nCreate a boolean mask by checking if self &lt; rhs.\nLess than or equal comparison\nCreate a boolean mask by checking if self &lt;= rhs.\nReturns the maximum value in the array, according to the …\nGet the max of the Series as a new Series of length 1.\nReturns the mean value in the array Returns an option …\nReturns the median value in the array Returns an option …\nGet the median of the Series as a new Series of length 1.\nReturns the minimum value in the array, according to the …\nGet the min of the Series as a new Series of length 1.\nNumber of chunks in this Series\nGet unique values in the Series.\nName of series.\nConstruct a new <code>Series</code> from a collection of <code>AnyValue</code>.\nCreate a new empty Series.\nCreate a new Series filled with values from the given …\nCheck for inequality.\nCreate a boolean mask by checking for inequality.\nCheck for inequality where <code>None == None</code>.\nCreate a boolean mask by checking for inequality.\nUnpack to <code>ChunkedArray</code> of dtype <code>[DataType::Null]</code>\nCount the null values.\nGet the product of an array.\nGet the quantile of the ChunkedArray as a new Series of …\nAggregate all chunks to a contiguous array of memory.\nRename the Series.\nRename series.\nreturn a Series in reversed order\nApply a custom function over a rolling/ moving window of …\nSample a fraction between 0.0-1.0 of this <code>ChunkedArray</code>.\nShift the values by a given period and fill the parts that …\nShrink the capacity of this array to fit its length.\nShrink the capacity of this array to fit its length.\nGet a zero copy view of the data.\nSort the series with specific options.\nGet a zero copy view of the data.\nReturns the std value in the array Returns an option …\nGet the standard deviation of the Series as a new Series …\nUnpack to <code>ChunkedArray</code> of dtype <code>[DataType::String]</code>\nCast throws an error if conversion had overflows\nUnpack to <code>ChunkedArray</code> of dtype <code>[DataType::Struct]</code>\nCompute the sum of all values in this Series. Returns …\nGet the sum of the Series as a new Scalar.\nGet the sum of the Series as a new Series of length 1. …\nGet the tail of the Series.\nTake by index. This operation is clone.\nTake function that checks of null state in <code>ChunkIdx</code>.\nTake by index. This operation is clone.\nTake by index.\nTake by index.\nTake by index if ChunkedArray contains a single chunk.\nUnpack to <code>ChunkedArray</code> of dtype <code>[DataType::Time]</code>\nConvert a chunk in the Series to the correct Arrow type. …\nCast numerical types to f64, and keep floats as is.\nCast a datelike Series to their physical representation. …\nTry to set the <code>Metadata</code> for the underlying <code>ChunkedArray</code>\nUnpack to <code>ChunkedArray</code> of dtype <code>[DataType::UInt16]</code>\nUnpack to <code>ChunkedArray</code> of dtype <code>[DataType::UInt32]</code>\nUnpack to <code>ChunkedArray</code> of dtype <code>[DataType::UInt64]</code>\nUnpack to <code>ChunkedArray</code> of dtype <code>[DataType::UInt8]</code>\nGet unique values in the Series.\nCompute the unique elements, but maintain order. This …\nReturns the var value in the array Returns an option …\nGet the variance of the Series as a new Series of length 1.\nReturn this Series with a new name.\nCreate a new ChunkedArray with values from self where the …\nA <code>[Series]</code> that amortizes a few allocations during …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nSwaps inner state with the <code>array</code>. Prefer …\nTemporary swaps out the array, and restores the original …\nChecked integer division. Computes self / rhs, returning …\nChecked integer division. Computes self / rhs, returning …\ndrop nulls\nignore nulls\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.")