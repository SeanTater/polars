window.SIDEBAR_ITEMS = {"constant":["IDX_DTYPE","NULL"],"enum":["AggExpr","Ambiguous","AnyValue","ArrowDataType","ArrowTimeUnit","AsofStrategy","BooleanFunction","CategoricalFunction","CategoricalOrdering","ClosedInterval","ClosedWindow","CommentPrefix","CsvEncoding","DataType","DslPlan","Excluded","Expr","FillNullStrategy","FunctionExpr","GroupByMethod","GroupsIndicator","GroupsProxy","IndexOrder","InterpolationMethod","IpcCompression","JoinCoalesce","JoinType","JoinValidation","JsonFormat","Label","LiteralValue","NestedType","NonExistent","NullValues","Operator","ParallelStrategy","ParquetCompression","PolarsError","PowFunction","QuantileInterpolOptions","QuoteStyle","RankMethod","RevMapping","SearchSortedSide","StartBy","StringFunction","StructFunction","TemporalFunction","TimeUnit","UniqueKeepStrategy","UnknownKind","WindowMapping","WindowType"],"fn":["_coalesce_full_join","_join_suffix_name","abs","all","all_horizontal","any_horizontal","apply_binary","apply_multiple","arange","arg_sort_by","arg_where","as_struct","avg","base_utc_offset","binary_expr","call_categorical_merge_operation","cast","check_projected_arrow_schema","check_projected_schema","check_projected_schema_impl","clip","clip_max","clip_min","coalesce","coalesce_series","col","collect_all","cols","concat","concat_expr","concat_lf_diagonal","concat_lf_horizontal","concat_list","concat_str","convert_inner_type","convert_to_unsigned_index","count_rows","create_enum_data_type","cum_count","cum_fold_exprs","cum_max","cum_min","cum_prod","cum_reduce_exprs","cum_sum","date_ranges","datetime","datetime_range","datetime_ranges","datetime_to_timestamp_ms","datetime_to_timestamp_ns","datetime_to_timestamp_us","default_join_ids","deserialize","diff","dst_offset","dtype_col","dtype_cols","duration","ensure_duration_matches_data_type","ensure_is_constant_duration","first","floor_div_series","fmt_group_by_column","fold_exprs","format_str","get_reader_bytes","get_sequential_row_statistics","group_by_values","group_by_windows","hor_str_concat","impl_replace_time_zone","impl_replace_time_zone_fast","in_nanoseconds_window","index_cols","indexes_to_usizes","infer_file_schema","int_range","int_ranges","interpolate","interpolate_by","is_between","is_cloud_url","is_compressed","is_first_distinct","is_in","is_last_distinct","is_not_null","is_null","is_positive_idx_uncertain","last","len","lit","make_categoricals_compatible","make_list_categoricals_compatible","map_binary","map_list_multiple","map_multiple","materialize_empty_df","materialize_projection","max","mean","median","merge_dtypes","min","negate","negate_bitwise","new_int_range","not","nth","private_left_join_multiple_keys","quantile","reduce_exprs","repeat","repeat_by","replace","replace_or_default","replace_strict","replace_time_zone","resolve_homedir","split_helper","split_to_struct","str_join","strip_chars","strip_chars_end","strip_chars_start","strip_prefix","strip_suffix","sum","ternary_expr","time_ranges","when"],"macro":["df","polars_bail","polars_ensure","polars_err","polars_warn"],"mod":["aggregations","arity","array","binary","buffer","cat","chunkedarray","cloud","datatypes","datetime","default_arrays","dt","expr","fill_null","fixed_size_list","float_sorted_arg_max","full","function_expr","gather","interpolate","interpolate_by","mode","nan_propagating_aggregate","null","schema_inference","search_sorted","series","slice","sort","strings","udf","utf8","zip"],"static":["BOOLEAN_RE","DTYPE_ENUM_KEY","DTYPE_ENUM_VALUE","FLOAT_RE","FLOAT_RE_DECIMAL","INTEGER_RE","POLARS_TEMP_DIR_BASE_PATH"],"struct":["AnonymousScanArgs","AnonymousScanOptions","Arc","ArrayNameSpace","ArrowField","ArrowSchema","AsOfOptions","BatchedCsvReader","BatchedParquetReader","BinaryOffsetType","BinaryType","BooleanChunkedBuilder","BooleanType","Bounds","BoundsIter","BrotliLevel","CatIter","CategoricalChunked","CategoricalChunkedBuilder","CategoricalNameSpace","CategoricalType","ChainedThen","ChainedWhen","ChunkId","ChunkedArray","CsvParseOptions","CsvReadOptions","CsvReader","CsvWriter","CsvWriterOptions","DataFrame","DateType","DatetimeArgs","DatetimeType","DecimalType","Duration","DurationArgs","DurationType","DynamicGroupOptions","ExprNameNameSpace","FalseT","Field","FieldsMapper","FileMetaData","FixedSizeListType","Float32Type","Float64Type","GlobalRevMapMerger","GroupBy","GroupsIdx","GroupsProxyIter","GroupsProxyParIter","GzipLevel","InProcessQuery","Int128Type","Int16Type","Int32Type","Int64Type","Int8Type","IpcReader","IpcScanOptions","IpcStreamReader","IpcStreamWriter","IpcStreamWriterOption","IpcWriter","IpcWriterOption","IpcWriterOptions","JoinArgs","JoinBuilder","JoinOptions","JsonLineReader","JsonReader","JsonWriter","JsonWriterOptions","LazyCsvReader","LazyFrame","LazyGroupBy","LazyJsonLineReader","ListBinaryChunkedBuilder","ListBooleanChunkedBuilder","ListNameSpace","ListPrimitiveChunkedBuilder","ListStringChunkedBuilder","ListType","Logical","NoNull","Null","NullableIdxSize","ObjectType","OptState","OwnedBatchedCsvReader","OwnedObject","ParquetOptions","ParquetReader","ParquetStatistics","ParquetWriteOptions","ParquetWriter","PrimitiveChunkedBuilder","RankOptions","RollingCovOptions","RollingGroupOptions","RollingOptionsDynamicWindow","RollingOptionsFixedWindow","RollingQuantileParams","RollingVarParams","Scalar","ScanArgsAnonymous","ScanArgsIpc","ScanArgsParquet","Schema","SerializeOptions","Series","SlicedGroups","SortMultipleOptions","SortOptions","SpecialEq","SplitNChars","StatisticsOptions","StringCacheHolder","StringType","StrptimeOptions","StructArray","StructChunked","StructNameSpace","Then","TimeType","TrueT","UInt16Type","UInt32Type","UInt64Type","UInt8Type","UnionArgs","UnpivotArgs","UserDefinedFunction","When","Window","ZstdLevel"],"trait":["AnonymousScan","ArgAgg","ArithmeticChunked","ArrayCollectIterExt","ArrayFromIter","ArrayFromIterDtype","AsBinary","AsList","AsRefDataType","AsString","AsofJoin","AsofJoinBy","BinaryNameSpaceImpl","BinaryUdfOutputField","CategoricalMergeOperation","ChunkAgg","ChunkAggSeries","ChunkAnyValue","ChunkApply","ChunkApplyKernel","ChunkBytes","ChunkCast","ChunkCompare","ChunkExpandAtIndex","ChunkExplode","ChunkFillNullValue","ChunkFilter","ChunkFull","ChunkFullNull","ChunkQuantile","ChunkReverse","ChunkRollApply","ChunkSet","ChunkShift","ChunkShiftFill","ChunkSort","ChunkTake","ChunkTakeUnchecked","ChunkUnique","ChunkVar","ChunkZip","ChunkedBuilder","ChunkedCollectInferIterExt","ChunkedCollectIterExt","ChunkedSet","CrossJoin","DataFrameJoinOps","DataFrameOps","DateMethods","DatetimeMethods","DfTake","DurationMethods","ExprEvalExtension","FromData","FromDataBinary","FromDataUtf8","FunctionOutputField","GetAnyValue","IndexOfSchema","IndexToUsize","InitHashMaps","InitHashMaps2","IntoGroupsProxy","IntoLazy","IntoListNameSpace","IntoScalar","IntoSeries","IntoVec","IsFirstDistinct","IsLastDistinct","JoinDispatch","LazyFileListReader","LhsNumOps","ListBuilderTrait","ListFromIter","ListNameSpaceExtension","ListNameSpaceImpl","Literal","LogicalType","NamedFrom","NamedFromOwned","NewChunkedArray","NumOpsDispatch","NumOpsDispatchChecked","NumericNative","PolarsArray","PolarsDataType","PolarsFloatType","PolarsIntegerType","PolarsIterator","PolarsNumericType","PolarsObject","PolarsRound","PolarsTemporalGroupby","PolarsTruncate","PolarsUpsample","QuantileAggSeries","Reinterpret","RenameAliasFn","RollingSeries","RoundSeries","SerReader","SerWriter","SeriesBinaryUdf","SeriesJoin","SeriesMethods","SeriesOpsTime","SeriesRank","SeriesSealed","SeriesTrait","SeriesUdf","SlicedArray","StaticArray","StringMethods","StringNameSpaceImpl","TakeChunked","TemporalMethods","TimeMethods","ToDummies","UdfSchema","VarAggSeries","VecHash"],"type":["AllowedOptimizations","ArrayChunked","ArrayRef","BinaryChunked","BinaryChunkedBuilder","BinaryOffsetChunked","BooleanChunked","BorrowIdxItem","ChunkJoinOptIds","DateChunked","DatetimeChunked","DecimalChunked","DurationChunked","DynArgs","FieldRef","FieldsNameMapper","FileMetaDataRef","FillNullLimit","Float32Chunked","Float64Chunked","GetOutput","GroupsSlice","IdxArr","IdxCa","IdxItem","IdxSize","IdxType","InnerJoinIds","Int128Chunked","Int16Chunked","Int32Chunked","Int64Chunked","Int8Chunked","LargeBinaryArray","LargeListArray","LargeStringArray","LeftJoinIds","ListChunked","NullableChunkId","ObjectChunked","PathIterator","PlHashMap","PlHashSet","PlIdHashMap","PlIndexMap","PlIndexSet","PolarsResult","RowGroupIterColumns","SchemaRef","SmartString","StringChunked","StringChunkedBuilder","TimeChunked","TimeZone","UInt16Chunked","UInt32Chunked","UInt64Chunked","UInt8Chunked"]};